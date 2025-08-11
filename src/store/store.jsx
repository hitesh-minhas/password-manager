import { createContext, useState } from "react";
import { toast } from "react-toastify"; // Assuming you're using react-toastify

export const passwordContext = createContext();

const PasswordContextProvider = ({ children }) => {
    const [form, setform] = useState({ url: "", username: "", password: "" });
    const [passwords, setpasswords] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const fetchPasswords = async () => {
        try {
            const response = await fetch("http://localhost:3000/passwords");
            const data = await response.json();
            setpasswords(data);
        } catch (error) {
            toast.error("Failed to load passwords.");
        }
    };

    const handleInputChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const isValidUrl = (urlString) => {
        try {
            new URL(urlString);
            return true;
        } catch (error) {
            return false;
        }
    };

    const validateForm = (url, username, password) => {
        if (!url || !username || !password) return "Fill all fields.";
        if (!isValidUrl(url)) return "Invalid URL.";
        if (username.length < 3) return "Username minimum length is 3.";
        if (password.length < 3) return "Password minimum length is 3.";
        return null;
    };

    const handleSubmit = async () => {
        let url = form.url.startsWith("http") ? form.url : `https://${form.url}`;
        const error = validateForm(url, form.username, form.password);
        if (error) return toast.warn(error);
        const method = editingId ? "PUT" : "POST";
        const endpoint = editingId ? `http://localhost:3000/passwords/${editingId}` : "http://localhost:3000/passwords";
        let res = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form, url }),
        });
        if (res.ok) {
            toast.success(editingId ? "Updated!" : "Saved!");
            fetchPasswords();
            setform({ url: "", username: "", password: "" });
            setEditingId(null);
        }
    };

    const setEditFields = (item) => {
        setform({ ...item });
        setEditingId(item._id);
    };

    const handleDelete = async (id) => {
        let res = await fetch(`http://localhost:3000/passwords/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            fetchPasswords();
            toast.success("Password Deleted successfully");
        }
    };

    const handleCopy = async (password) => {
        try {
            await navigator.clipboard.writeText(password);
            toast.success("Copied");
        } catch (err) {
            toast.warn("Can't Copy!");
        }
    };

    return (
        <passwordContext.Provider
            value={{
                form,
                setform,
                passwords,
                setpasswords,
                showPassword,
                setShowPassword,
                editingId,
                setEditingId,
                fetchPasswords,
                setEditFields,
                handleInputChange,
                isValidUrl,
                validateForm,
                handleSubmit,
                handleDelete,
                handleCopy,
            }}
        >
            {children}
        </passwordContext.Provider>
    );
};

export default PasswordContextProvider;
