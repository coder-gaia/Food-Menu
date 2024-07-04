import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./CreateModal.css";

interface InputProps{
    label: string,
    value: string | number,
    updateValue: (value: any) => void;
}

interface ModalProps{
    closeModal(): void
}


const Input = ({label, value, updateValue}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal} : ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isPending } = useFoodDataMutate()

    useEffect(() => {
        if(!isSuccess) return
        closeModal()
    }, [isSuccess])

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        }
        mutate(foodData)
    }

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Register a new item on the menu</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}></Input>
                    <Input label="price" value={price} updateValue={setPrice}></Input>
                    <Input label="image" value={image} updateValue={setImage}></Input>
                </form>
                <div className="btn-group">
                    <button onClick={submit} className="btn-secondary">{isPending ? "Posting..." : 'Post'}</button>
                    <button onClick={closeModal} className="btn-terciary">Cancel</button>
                </div>
            </div>
        </div>
    )
}