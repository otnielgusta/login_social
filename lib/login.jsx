import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
import {useContext, useEffect} from 'react';
import Context from './context';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    const [authenticate, setAuthenticate] = useContext(Context);
    const [request, response, promptAsync] = Google.useAuthRequest({
        //expoClientId: '162234921379-f110783il68elt5h6f06cogo3g8bdsjh.apps.googleusercontent.com',
        //iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        //androidClientId: '162234921379-f110783il68elt5h6f06cogo3g8bdsjh.apps.googleusercontent.com',
        webClientId: '162234921379-f110783il68elt5h6f06cogo3g8bdsjh.apps.googleusercontent.com',
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            fetch('https://www.googleapis.com/oauth2/v3/userinfo',{
                method: "GET",
                headers:{
                    Accept: 'application/json',
                    Authorization: 'Bearer '+authentication.accessToken,
                    'Content-Type': 'application/json'
                }
            })
            .then((response)=>{
                return response.json();
            })
            .then((json)=>{
                setAuthenticate({
                    email: json.email,
                    name: json.name
                })
            })
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
            }}
        />
    );
}