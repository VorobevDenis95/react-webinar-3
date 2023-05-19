import React, {useCallback, useState} from 'react';
import PropTypes from "prop-types";
import List from '../list';
import Controls from "../controls";
import Head from "../head";
import PageLayout from "../page-layout";
import './style.css';


function Modal({store, onAddItem, onDeleteItem, onSelectItem, list}) {

    const [isOpen, setIsOpen] = useState(true);

    // const callbacks = {
    //     onDeleteItem: useCallback((code) => {
    //       store.deleteItem(code);
    //     }, [store]),
    
    //     onSelectItem: useCallback((code) => {
    //       store.selectItem(code);
    //     }, [store]),
    
    //     onAddItem: useCallback(() => {
    //       store.addItem();
    //     }, [store])
    //   }
    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        console.log(1);
        setIsOpen(false)

    }
    const element = (
        <div className='Modal_btn_close'>
    <Controls closeModal={closeModal} title={'Закрыть'}/>
        </div>
    )

    const getStyle = () => {
        return (isOpen ?  "Modal_wrapper" : 'Modal_wrapper_unvisible');
        
    }



    return (
        <div className={getStyle()}>
            <PageLayout>
                <Head title='Корзина'>
                </Head>
                {element} 
                {/* <Controls onAdd={onAddItem}/> */}
                <List list={list}
                onDeleteItem={onDeleteItem}
                onSelectItem={onSelectItem}
                btnItem={'Удалить'}
                isCount={true}
                />
            </PageLayout>
        </div>
    )

}

export default Modal;