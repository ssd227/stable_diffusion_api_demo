import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

import {fetchDiffusion, fetchTest} from './api.js'



function ResImageArea({img_url}) {
  // 图片显示结果

  console.log(img_url)

  if (img_url!="") {
    return (
      <div className="image_div">
        <p> 模型返回成功</p>
        <img className="image_content" src={img_url} alt={"model return image"} />
      </div>
    )
  } 
  else {
    return(
      <div className="image_div">
      <p> 图片生成中...（等待5s左右）</p>
    </div>
    )
  }

}


/* promt输入框, 文字加发送请求 */
function PromtInput({onGetResImage}) {
  // const [newPromt, setNewPromt] = useState('false');
  const [message, setMessage] = useState('a photo of an astronaut riding a horse in ocean');

  function handleSubmit(e) {
    e.preventDefault();
    onGetResImage("")
    // alert(`正在为promt:{${message}}生成图片`);
  
    fetchDiffusion(message).then(imgUrl => {
      console.log("imgUrl", imgUrl)
      onGetResImage(imgUrl)
    } )
  };


   return (
    <form onSubmit={handleSubmit}>
      <p>输入图片描述性文字</p>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
   )

};


function MainPart() {
  const [resUrl, setResUrl] = useState("")

  function handleResUrl(iurl) {
    setResUrl(iurl)
  }

  return (
    <>
      <PromtInput onGetResImage= {handleResUrl} />
      <ResImageArea img_url={resUrl} />
    </>

  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      {/* 标题 */}
      <h1> stable diffusion v1.4 demo</h1>

      <MainPart/>
      </header>
    </div>
  );
}

export default App;
