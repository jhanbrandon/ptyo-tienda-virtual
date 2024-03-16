'use client';

import {useEffect, useState} from 'react';
import { Box, Button, TextField, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { Google as GoogleIcon } from '@mui/icons-material';
import { signUp } from '@/firebase/auth/traditionalAuth';
import { signInWithGooglePopup } from "@/firebase/auth/googleAuth";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebase_app from "@/firebase/config";
import { useRouter } from "next/navigation";

const passwordRequirements = {
    length: (password) => password.length >= 8 && password.length <= 64,
    upperCase: (password) => /[A-Z]/.test(password),
    lowerCase: (password) => /[a-z]/.test(password),
    number: (password) => /[0-9]/.test(password),
    specialChar: (password) => /[!@#$%^&*(){}\[\]+\-_=~]/.test(password),
};

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const checkPassword = (password) => {
        return {
            length: passwordRequirements.length(password),
            upperCase: passwordRequirements.upperCase(password),
            lowerCase: passwordRequirements.lowerCase(password),
            number: passwordRequirements.number(password),
            specialChar: passwordRequirements.specialChar(password),
        };
    };

    const passwordChecklist = checkPassword(password);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignUp = async () => {
        const { result, error } = await signUp(email, password);
        if (error) {
            setError(error.message);
        }
    };

    const handleSignUpWithGoogle = async () => {
        const { result, error } = await signInWithGooglePopup();
        if (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        const auth = getAuth(firebase_app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            }
        });
    }, []);

    return (
        <Box sx={{ height: '100vh' }}>
            <Paper elevation={3} sx={{ p: 3, maxWidth: 300, mx: 'auto', mt: 5 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Registrarse</Typography>
                {error && <Typography color="error">{error}</Typography>}
                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <List dense>
                    {Object.keys(passwordChecklist).map((key) => (
                        <ListItem key={key}>
                            <ListItemIcon>
                                {passwordChecklist[key] ? <CheckCircleIcon color="success" /> : <ErrorIcon color="error" />}
                            </ListItemIcon>
                            <ListItemText primary={
                                key === 'length' ? "Must be between 8 and 64 characters" :
                                    key === 'upperCase' ? "Must contain 1 upper case character" :
                                        key === 'lowerCase' ? "Must contain 1 lower case character" :
                                            key === 'number' ? "Must contain numbers" :
                                                "Must contain symbols (!@#$%^&*(){}[]+-_=~)"
                            } />
                        </ListItem>
                    ))}
                </List>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleSignUp}
                >
                    Registrarse
                </Button>
                <Button
                    startIcon={<GoogleIcon />}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleSignUpWithGoogle}
                >
                    Regístrate con Google
                </Button>
            </Paper>
        </Box>
    );
}
