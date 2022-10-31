import * as React from 'react'
import {useHistory} from "react-router-dom";
import {Button} from "../components/button";

export const History: React.FC =() => {
    const history = useHistory()
    return(
        <>
            <h1>his</h1>
            <Button onClick={() => history.push("/editor")}>
                エディタへ戻る
            </Button>
            <Button onClick={() => history.push("/neko")}>
                nekoへ
            </Button>
            <Button onClick={() => history.goBack()}>
                戻る
            </Button>
        </>
    )


}