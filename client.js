const axios = require("axios");

const data = {
    title: "tifc2dev-4-thanawatpanpinij",
    content: "31_Thanawat_(Art/อาร์ต)",
};

axios
    .post(`http://localhost:3000/posts`, data)
    .then((response) => {
        console.log("Post created successfully:", response.data);
    })
    .catch((error) => {
        console.error("Error creating post:", error);
    });
