import './index.css';

export const Numbers = (props) => {
    const {num,clickedBtn} =props
    const onClickBtn =()=>{
        clickedBtn(num)
    }
    return(
        <li className='number'><button className='num-btn' onClick={onClickBtn}>{num}</button></li>
    )
}

export const Arithmetic=(props)=>{
    const {arth,clickedOperBtn} = props;
    const onClickBtn =()=>{
      
        clickedOperBtn(arth)
    }
    return(
        <li className='number'><button className='num-btn' onClick={onClickBtn}>{arth}</button></li>
    )
    }