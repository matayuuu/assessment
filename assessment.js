'use strict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided=document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');

function removeALLChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
assessmentButton.onclick=()=>{
    const userName=userNameInput.Value;
   if(userName.length=0){
       return;
   }
const header =document.createElement('h3');
header.innerText='診断結果';
resultDivided.appendChild(header);

const  paragraph=document.createElement('p');
const result=assessment(userName);
paragraph.innnerText=result;
resultDivided.appendChild(paragraph);

    console.log(userName);
}


const   answers=[
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}の良いところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',

   
];

/**
 * 名前の文字列を渡すと診断結果を返す機能
 * @param｛string}　userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment (userName){
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode=0;
    for(let i=0;i<userName.length;i++){
        sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
    }
    //文字のコード番号の合計を回数で割って添字の数字を求める
    const index=sumOfCharCode%answers.length;
    let result=answers[index];
    result=result.replace(/\{userName\}/g,userName);


    return result;
}

console.log(assessment('太朗'));
console.log(assessment('次郎'));
console.log(assessment('太朗'));
