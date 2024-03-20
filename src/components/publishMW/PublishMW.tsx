import { FC, useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ModalWindow from "../modalWindow/ModalWindow";

import "./PublishMW.scss";

interface PublishMWProps {
  onSetModalClose?(): void;
}

type Inputs = {
  forSale: string
  tags: string
  pickFileInput: File
}

const PublishMW:FC<PublishMWProps> = ({onSetModalClose}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef<HTMLInputElement | null>(null);
  
  const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(selectedFile)
    console.log(data)
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }

  const handlePick = () => {
    filePicker?.current?.click();
  }

  const { onChange, name, ref } = register('pickFileInput', {required: {
      value: true,
      message: "Загрузите изображение",
    }}); 

  return (
    <ModalWindow onSetModalClose={onSetModalClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="publish-form">
        <div className="publish-form__file-picker">
          <button onClick={handlePick} className="pick-file-btn" type="button">Выберите файл</button>
          <input
            type="file"
            accept="image/*, .png, .jpg, .gif, .web"
            className="hidden"
            onChange={e => {
              handleChange(e)
              onChange(e)
            }}
            name={name}
            ref={(e) => {
              ref(e)
              filePicker.current = e
            }}
            aria-invalid={errors.pickFileInput ? "true" : "false"} 
            />
          {selectedFile && (<p>{selectedFile?.name}</p>)}
        </div>
        {errors.pickFileInput?.type === "required" && <p role="alert" className="alert-msg">{errors.pickFileInput.message}</p>}

        <div className="publish-form__sale-check">
          <p>Для продажи?</p>
          <div>
            <input id="Yes" {...register("forSale", { required: "Заполните обязательное поле" })} type="radio" value="Yes" />
            <label htmlFor="Yes">да</label>
          </div>
          <div>
            <input id="No" {...register("forSale", { required: "Заполните обязательное поле" })} type="radio" value="No" />
            <label htmlFor="No">нет</label>
          </div> 
        </div>
        {errors.forSale?.type === "required" && <p role="alert"  className="alert-msg">{errors.forSale.message}</p>}

        <input
          className="publish-form__tags-input"
          type="text" 
          placeholder="#тег #другой_тег" 
          {...register( "tags", {pattern: {value: /^((\#\w+\_*)+\s*)+$/g, message: "Текст должен соответствовать шаблону: #название_тега"}})}
          aria-invalid={errors.tags ? "true" : "false"} 
          />
        {errors.tags && <p role="alert"  className="alert-msg">{errors.tags.message}</p>}
        
        
        <input type="submit" className="submit-btn"/>
        {isSubmitSuccessful && <p style={{textAlign: "center", margin: "10px auto", fontWeight: "700"}}>Данные успешно отправлены</p>}
      </form>
    </ModalWindow>
  )
}

export default PublishMW;