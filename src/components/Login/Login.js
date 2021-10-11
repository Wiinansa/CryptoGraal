import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import axios from 'axios';
import "./Login.css"

export default function Login() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [login, setLogin] = useState();

    const onSubmit = data => {
        console.log(data);
        setLogin(data);
        console.log("login", login);
        loginAuth();
    }


    const loginAuth = async() => {
        //console.log("login3", login["email"]);
        res();
    }
    console.log(watch("example"));

    /*const loadIssues = async () => {
        console.log("login 2", login);
        const url = "http://localhost:8000/api/auth/login";
        const response = await axios.post(url, {}, {
            auth: {
                email: login.email,
                password: login.password,
            }
        }).then(function (response) {
            console.log('Authenticated');
        }).catch(function (error) {
            console.log('Error on Authentication');
            console.log("setIssues", response.data);
            setLogin(response.data);
        })
    }*/

    const res = async () => await axios.get('https://httpbin.org/basic-auth/foo/bar', {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        auth: {
            username: 'foo',
            password: 'bar'
        }
    });

        useEffect(() => {

        }, []);

        return (

            <div className={"Body"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>E-mail</h1>
                    <input {...register("email", {required: true})} />
                    <h1>Password</h1>
                    <input type={"password"} {...register("password", {required: true})} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className={"Button"} type="submit"/>
                </form>
            </div>
        );
    }