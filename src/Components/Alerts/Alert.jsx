import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeAlert } from "../../State/state"

const Alert = () => {
    const alertInfo = useSelector((state) => state.alert.value)
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(removeAlert())
        }, 5000);
    }, [])
    
    const alertFormat = [
        {
            icon: 'x',
            color: 'red-700',
            outlineColor: 'red-300',
            text: 'Error'
        },   
        {
            icon: 'check',
            color: 'green-800',
            outlineColor: 'green-600',
            text: 'Success'
        },   
        {
            icon: 'info',
            color: 'blue-700',
            outlineColor: 'blue-300',
            text: 'Info'
        },   
    ]
    return(
        <div style={{
            zIndex: 400
        }}
        className='fixed top-50 flex h-screen bg-transparent justify-center items-center w-full'>
            <div className="border h-fit bg-white w-4/5 flex flex-col justify-between items-center p-4 shadow-lg rounded-xl mt-9 gap-4">
                <div className="flex flex-col justify-center text-center">
                     <p className={`text-white rounded-full flex items-center justify-center bg-${alertFormat[alertInfo.alertFormatIndex].outlineColor}`} style={{
                        width: 70+'px',
                        height: 70+'px'
                     }}>
                        <i className={`bi bi-${alertFormat[alertInfo.alertFormatIndex].icon} bg-${alertFormat[alertInfo.alertFormatIndex].color} rounded-full text-5xl  flex items-center justify-center`} style={{
                        width: 50+'px',
                        height: 50+'px'
                     }}></i></p>

                    <p className={`font-bold`}>{alertFormat[alertInfo.alertFormatIndex].text.toUpperCase()}</p>
                </div>

                    <p className="text-center ">{alertInfo.alertMessage}</p>
                    <button className={` bg-${alertFormat[alertInfo.alertFormatIndex].color} text-white rounded-full w-4/5 p-2`} onClick={() => {
                        dispatch(removeAlert())
                    }}>Close</button>
            </div>
             
        </div>
    )
}


export { Alert }