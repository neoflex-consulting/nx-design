import React,
{ useRef, useState }
from 'react';
import convert from 'color-convert';
import './colorConvert.css';


function hexToHsl(hex:string) {
  return convert.hex.hsl(hex)
}

function handleCompare(firstHsl:string, secondHsl:string) {
  const first:number[] = firstHsl.split(',').map(e=>+e)
  const second:number[] = secondHsl.split(',').map(e=>+e)
  return first.map((e:any, i)=>{
    if(e > second[i]){
      return `-${e - second[i]}`
    }else if(e < second[i]){
      return `+${second[i] - e}`
    }else{
      return ''
    }
  })
}

export function ColorConvert(){

  const [firstHex, setFirstHex] = useState<string>('');
  const [secondHex, setSecondHex] = useState<string>('');
  const [firstHsl, setFirstHsl] = useState<string>('');
  const [secondHsl, setSecondHsl] = useState<string>('');
  const [compare, setCompare] = useState<string[]>([]);
  const firstHexRef = useRef(null);
  const secondHexRef = useRef(null);
  const hslRef = useRef(null);

  const onFirstHexChange = (event:any) => {
    setFirstHex(event.target.value)
    setFirstHsl(hexToHsl(event.target.value).join(','));

  }

  const onSecondHexChange = (event:any) => {
    setSecondHex(event.target.value)
    setSecondHsl(hexToHsl(event.target.value).join(','));
  }

  const convert = (event:any) => {
    event.preventDefault();
    setCompare(handleCompare(firstHsl, secondHsl));
  }

  return (
      <form onSubmit={convert}>
        <div className={'convert'}>
          <div className={'card'} style={{ borderColor: firstHex||'grey', filter: `drop-shadow(2px 4px 6px ${firstHex})`}}>
            <label >
              Hex:
              <input onChange={(e) => onFirstHexChange(e)} ref={firstHexRef}/>
            </label>
            <label>
              Hsl:
              <input ref={hslRef} value={firstHsl} disabled/>
            </label>
          </div>

          <div className={'compare'}>
            <input type={'submit'} value={'Сравнить'}/>
            <div style={{width: '100%', height: '25px'}}>
              {compare[0] && `h(${compare[0]})`}
              {compare[1] && ` s(${compare[1]})`}
              {compare[2] && ` l(${compare[2]})`}
            </div>
          </div>

          <div className={'card'} style={{ borderColor: secondHex||'grey', filter: `drop-shadow(2px 4px 6px ${secondHex})`}}>
            <label >
              Hex:
              <input onChange={(e) => onSecondHexChange(e)} ref={secondHexRef}/>
            </label>
            <label>
              Hsl:
              <input ref={hslRef} value={secondHsl} disabled/>
            </label>
          </div>
        </div>
      </form>
  )
}

