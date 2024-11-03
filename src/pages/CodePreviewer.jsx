import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Preview } from './components/Preview';
import axios from 'axios';
import { Config, GeneralFunctions } from '../assets/config';

const CodePreviewer = () => {
    let [code, setCode] = useState('');
    let [preview, setPreview] = useState(false);
    const { id } = useParams();


    const getCode = () => {
        try {
            axios.get(Config.BACKEND_URL + 'api/gpt/generated-code?id=' + id).then(res => {
                if (res?.data?.response) {
                    const { cleanedCode } = GeneralFunctions.codeExtractor(res.data.response);
                    setCode(cleanedCode);
                    setPreview(true);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCode();
    }, [])

    return (
        preview ? 
        <Preview code={code} />
        : 
        <div>
            Loading ...
        </div>
    );
}

export default CodePreviewer;
