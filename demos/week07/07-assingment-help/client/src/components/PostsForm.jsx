import { useNavigate } from "react-router"
import { useState } from "react"


export default function PostsForm() {
    const [formData, setFormData] = useState()

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(formData)
    }


    function handleSubmit(e) {
        e.preventDefault()
        // we'll have formData
        fetch(`http://localhost:8080/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        // you could use useNavigate to redirect the user after they've submitted a form.
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* have the input names here be the same as the columns in yoru database */}
            <input name="title" onChange={handleChange}/>
            <input name="author" onChange={handleChange}/>
            <input name="content" onChange={handleChange} />
            <input name="image" onChange={handleChange} />
            <button type="submit">submit</button>
        </form>
    )
}

/*
{
    "title": "foo",
    "author": "foo",
    "contnet": "foobar",
    "image": ""
}
*/