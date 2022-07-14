export const imgUpload = async (file) => {
    const formData = new FormData();
    formData.append("upload_preset", "buffalo");
    formData.append("file", file);

    const resp = await fetch("https://api.cloudinary.com/v1_1/dd5yolnde/upload", { 
        method: "POST",
        body: formData
    })
    const data = await resp.json();
    
    return data.secure_url
}