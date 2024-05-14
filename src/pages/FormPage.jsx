import React from 'react';

const FormPage = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="заголовок"/>
                <textarea placeholder="Введите текст..." rows={5} cols={30}/>
                <br/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default FormPage;