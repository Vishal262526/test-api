const getUser = (req,res) => {
    const users = [
        {
            name:"Vishal",
            email:"vishal.kumar190601@gmail.com"
        },
        {
            name:"Anil",
            email:"anil.kumar0372915@gmail.com"
        },
        {
            name:"Rahul",
            email:"Rahul@gmail.com"
        }
        
    ]

    res.status(200).json(users);
}

module.exports = {getUser};