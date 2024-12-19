const CallMethod = () => {

    function setName(name) {
        this.name = name;
    }

    function setUerDetails(name, email, pass) {
        setName.call(this, name);
        this.email = email;
        this.pass = pass;
    }

    const x = new setUerDetails("abc", "abc@gmail.com", "abc@12345");
    console.log(x);

    return x;
}

export default CallMethod;