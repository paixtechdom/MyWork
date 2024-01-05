import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { logout } from "../../State/state"
import { toggleLightMode } from "../../State/state"

export const SettingsProfile = () => {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const isLightMode = useSelector((state) => state.app.value.isLightMode)
    // const hideNav = useSelector((state) => state.app.value.hideNav)

    return(
        <div>
            {/* <div className="mb-6">
                <div className="m-2 p-2 bg-black text-white rounded-xl text-white" onClick={(e) => {
                    e.preventDefault()
                    dispatch(
                        toggleLightMode(
                            {isLightMode: !isLightMode},
                            {hideNav: false}
                            )
                        )
                       
                }}>
                    {isLightMode ? 'Light Mode' : 'Dark mode'}
                </div>
            </div> */}

            <button className="m-2 p-2 bg-black text-white rounded-xl" onClick={() => {
                dispatch(logout())
                Navigate('/Login')
            }}>Logout</button>
        </div>
    )
} 