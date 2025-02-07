import Form from "next/form";

export default function Home() {
    return (
        // <form action='/submit'>
        //     <input type="text" name='username' placeholder='Username'/>
        //     <input type='text' name='password' placeholder='Password'/>
        //     <button type="submit">Submit</button>
        // </form>

        // <form action='/submit' method='POST'>
        //     <input type="text" name='username' placeholder='Username'/>
        //     <input type='text' name='password' placeholder='Password'/>
        //     <button type="submit">Submit</button>
        // </form>

        <Form action='/submit'>
            <input type="text" name='username' placeholder='Username'/>
            <input type='text' name='password' placeholder='Password'/>
            <button type="submit">Submit</button>
        </Form>
    );
}
