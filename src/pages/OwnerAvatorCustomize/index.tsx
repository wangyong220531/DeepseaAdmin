import { useState, Fragment } from 'react';
import style from './index.module.less';
import cars from '../../data/cars.json'

export default function OwnerAvatorCustomize() {

    const [selectedCar, setSelectedCar] = useState()
    const [inputVal, setInputVal] = useState()
    const [activedCar, setActivedCar] = useState("")

    function handleCarClick(e: any) {
        setSelectedCar(e.url)
        setActivedCar(e.url)
    }

    function handleInput(e: any) {
        setInputVal(e.target.value)
    }

    return <Fragment>
        <div className={style["index"]}>
            <div className={style["left"]}>
                <img className={style["bg"]} src="http://aiimg.suishoubang.com/upload/images/chezhu/bg/1.png" alt="" />
                <div className={style["band"]}>{inputVal}</div>
                <img className={style["car"]} src={selectedCar} alt="" />
                <img className={style["model"]} src="http://aiimg.suishoubang.com/upload/images/chezhu/person/1682476860095gkka9e4s.png" alt="" />
            </div>
            <div className={style["right"]}>
                <div className={style["tabs"]}>
                    <input type="text" placeholder='请输入车牌号' onChange={handleInput} />
                    <div className={style["tab"]}>背景</div>
                    <div className={style["tab"]}>车</div>
                    <div className={style["tab"]}>模特</div>
                </div>
                <div className={style["car"]}>
                    {cars.map(car => {
                        return <div className={style[activedCar === car.url ? "activedCar" : "card"]} onClick={() => handleCarClick(car)}>
                            <img src={car.url} alt="" />
                            <div className={style["name"]}>{car.type}</div>
                            <div className={style["color"]}>{car.color}</div>
                        </div>
                    })}
                </div>
                <div className={style["model"]}></div>
            </div>
        </div>
    </Fragment>
}
