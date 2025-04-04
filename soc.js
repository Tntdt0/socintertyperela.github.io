var ration = 0;
var intro = 0;
var funNe = 0;
var funFe = 0;
var Rela_Sel = [0];
var Rela_Char = [""];
var exa_typeque_blank = 0;
/////////////////////////////////////////
/////////////////////////////////////////
//按钮点击
function Click_Duiou()
{
    Rela_Sel.push(1);
    Rela_Char.push("的对偶");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Jingxiang()
{
    Rela_Sel.push(2);
    Rela_Char.push("的镜像");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Jihuo()
{
    Rela_Sel.push(3);
    Rela_Char.push("的激活");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Xiangdeng()
{
    Rela_Sel.push(4);
    Rela_Char.push("的相等");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Banduiou()
{
    Rela_Sel.push(5);
    Rela_Char.push("的半对偶");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Qinzu()
{
    Rela_Sel.push(6);
    Rela_Char.push("的亲族");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Yuedengyu()
{
    Rela_Sel.push(7);
    Rela_Char.push("的约等于");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Hezuo()
{
    Rela_Sel.push(8);
    Rela_Char.push("的合作");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Huanxiang()
{
    Rela_Sel.push(9);
    Rela_Char.push("的幻想");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Xiaoshi()
{
    Rela_Sel.push(10);
    Rela_Char.push("的消失");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Chaowo()
{
    Rela_Sel.push(11);
    Rela_Char.push("的超我");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Chongtu()
{
    Rela_Sel.push(12);
    Rela_Char.push("的冲突");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Youyi()
{
    Rela_Sel.push(13);
    Rela_Char.push("的有益");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Shouyi()
{
    Rela_Sel.push(14);
    Rela_Char.push("的受益");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Jiandu()
{
    Rela_Sel.push(15);
    Rela_Char.push("的监督");
    document.getElementById("relation").innerHTML = Rela_Char;
}
function Click_Shoujiandu()
{
    Rela_Sel.push(16);
    Rela_Char.push("的受监督");
    document.getElementById("relation").innerHTML = Rela_Char;
}
//////////////////////////////////
//////////////////////////////////
//类型选择
function Exa_TypeQue_Blank()
{
    if(exa_typeque_blank ==1)
    {
        document.getElementById("type_Ans").innerHTML = "";
        document.getElementById("relation").innerHTML = "";
        exa_typeque_blank = 0;
    }
}
function Click_LII()
{
    Exa_TypeQue_Blank();
    ration = 1;
    intro = 1;
    funNe = 1;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "LII";
}
function Click_ESE()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 0;
    funNe = 1;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "ESE";
}
function Click_ILE()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 0;
    funNe = 1;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "ILE";
}
function Click_SEI()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 1;
    funNe = 1;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "SEI";
}
///////////////////////////////////////
function Click_IEI()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 1;
    funNe = 0;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "IEI";
}
function Click_SLE()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 0;
    funNe = 0;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "SLE";
}
function Click_EIE()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 0;
    funNe = 0;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "EIE";
}
function Click_LSI()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 1;
    funNe = 0;
    funFe = 1;
    document.getElementById("type_Que").innerHTML = "LSI";
}
///////////////////////////////////
function Click_ILI()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 1;
    funNe = 0;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "ILI";
}
function Click_SEE()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 0;
    funNe = 0;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "SEE";
}
function Click_LIE()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 0;
    funNe = 0;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "LIE";
}
function Click_ESI()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 1;
    funNe = 0;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "ESI";
}
//////////////////////////////////
function Click_EII()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 1;
    funNe = 1;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "EII";
}
function Click_LSE()
{
    Exa_TypeQue_Blank()
    ration = 1;
    intro = 0;
    funNe = 1;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "LSE";
}
function Click_IEE()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 0;
    funNe = 1;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "IEE";
}
function Click_SLI()
{
    Exa_TypeQue_Blank()
    ration = 0;
    intro = 1;
    funNe = 1;
    funFe = 0;
    document.getElementById("type_Que").innerHTML = "SLI";
}
//////////////////////////////////
////////////////////////////////////
//计算键
function Click_Jisuan()
{
    var i = 0;
    var k = 0;
    for(i = 0; i < Rela_Sel.length; i++)
    {
        switch(Rela_Sel[i])
        {
            case 1: Cal_Duiou();        break;
            case 2: Cal_Jingxiang();    break;
            case 3: Cal_Jihuo();        break;
            case 4: Cal_Xingdeng();     break;
            case 5: Cal_Banduiou();     break;
            case 6: Cal_Qinzu();        break;
            case 7: Cal_Yuedengyu();    break;
            case 8: Cal_Hezuo();        break;
            case 9: Cal_Huanxiang();    break;
            case 10: Cal_Xiaoshi();     break;
            case 11: Cal_Chaowo();      break;
            case 12: Cal_Chongtu();     break;
            case 13: Cal_Youyi();       break;
            case 14: Cal_Shouyi();      break;
            case 15: Cal_Jiandu();      break;
            case 16: Cal_Shoujiandu();  break;
        }
    }

    if(funFe % 2 == 0)//下降+8
    {
        k = k + 8;
    }
    if(funNe % 2 == 0)//中心+4
    {
        k = k + 4;
    }
    if(intro % 2 == 0)//外倾+2
    {
        k = k + 2;
    }
    if(ration % 2 == 0)//非理性+1
    {
        k = k + 1;
    }
    //LII SEI ESE ILE / LSI IEI EIE SLE / EII SLI LSE IEE / ESI ILI LIE SEE
    // 0   1   2   3     4   5   6   7     8   9  10  11    12  13  14  15
    switch(k)
    {
       case 0: document.getElementById("type_Ans").innerHTML = "LII"; break;
       case 1: document.getElementById("type_Ans").innerHTML = "SEI"; break;
       case 2: document.getElementById("type_Ans").innerHTML = "ESE"; break;
       case 3: document.getElementById("type_Ans").innerHTML = "ILE"; break;

       case 4: document.getElementById("type_Ans").innerHTML = "LSI"; break;
       case 5: document.getElementById("type_Ans").innerHTML = "IEI"; break;
       case 6: document.getElementById("type_Ans").innerHTML = "EIE"; break;
       case 7: document.getElementById("type_Ans").innerHTML = "SLE"; break;

       case 8: document.getElementById("type_Ans").innerHTML = "EII"; break;
       case 9: document.getElementById("type_Ans").innerHTML = "SLI"; break;
       case 10: document.getElementById("type_Ans").innerHTML = "LSE"; break;
       case 11: document.getElementById("type_Ans").innerHTML = "IEE"; break;

       case 12: document.getElementById("type_Ans").innerHTML = "ESI"; break;
       case 13: document.getElementById("type_Ans").innerHTML = "ILI"; break;
       case 14: document.getElementById("type_Ans").innerHTML = "LIE"; break;
       case 15: document.getElementById("type_Ans").innerHTML = "SEE"; break;
    }

    Rela_Sel = [0];
    Rela_Char = [""];
    exa_typeque_blank = 1;
}
/////////////////////////////////
//清除上一个
function Click_ClearLast()
{
    Rela_Sel.pop();
    Rela_Char.pop();
    document.getElementById("relation").innerHTML = Rela_Char;
}
///////////////////////////////
//清除所有
function Click_ClearAll()
{
    Rela_Sel = [0];
    Rela_Char = [""];
    document.getElementById("relation").innerHTML = Rela_Char;
}
//////////////////////////////////
///////////////////////////////////
//类型计算
//1对偶
function Cal_Duiou()
{
    ration = ration + 0;
    intro = intro + 1;
    funNe = funNe + 0;
    funFe = funFe + 0;
}
//2镜像
function Cal_Jingxiang()
{
    ration = ration + 1;
    intro = intro + 1;
    funNe = funNe + 0;
    funFe = funFe + 0;
}
//3激活
function Cal_Jihuo()
{
    ration = ration + 1;
    intro = intro + 0;
    funNe = funNe + 0;
    funFe = funFe + 0;
}
//4相等
function Cal_Xingdeng()
{
    ration = ration + 0;
    intro = intro + 0;
    funNe = funNe + 0;
    funFe = funFe + 0;
}
//////////////////////////////////////////////
//5半对偶
function Cal_Banduiou()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 0;
        intro = intro + 1;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
    else//理性
    {
        ration = ration + 0;
        intro = intro + 1;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
}
//6亲族
function Cal_Qinzu()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 0;
        intro = intro + 0;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
    else//理性
    {
        ration = ration + 0;
        intro = intro + 0;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
}
//7约等于
function Cal_Yuedengyu()
{
    ration = ration + 1;
    intro = intro + 0;
    funNe = funNe + 1;
    funFe = funFe + 1;
}
//8合作
function Cal_Hezuo()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 0;
        intro = intro + 0;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
    else//理性
    {
        ration = ration + 0;
        intro = intro + 0;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
}
/////////////////////////////////////
//9幻想
function Cal_Huanxiang()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 0;
        intro = intro + 1;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
    else//理性
    {
        ration = ration + 0;
        intro = intro + 1;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
}
//10消失
function Cal_Xiaoshi()
{
    ration = ration + 0;
    intro = intro + 1;
    funNe = funNe + 1;
    funFe = funFe + 1;
}
//11超我
function Cal_Chaowo()
{
    ration = ration + 0;
    intro = intro + 0;
    funNe = funNe + 1;
    funFe = funFe + 1;
}
//12冲突
function Cal_Chongtu()
{
    ration = ration + 1;
    intro = intro + 1;
    funNe = funNe + 1;
    funFe = funFe + 1;
}
/////////////////////////
//LII SLI ESI IEI

//LIE SLE ESE IEE

//LSI ILI EII SEI
//13有益
function Cal_Youyi()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 1;
        intro = intro + 0;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
    else//理性
    {
        ration = ration + 1;
        intro = intro + 0;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
}
//14受益
function Cal_Shouyi()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 1;
        intro = intro + 0;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
    else//理性
    {
        ration = ration + 1;
        intro = intro + 0;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
}
////////////////////////////////////
//LII IEE ESI SLE
//ESE SLI LIE IEI
//15监督
function Cal_Jiandu()
{    
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 1;
        intro = intro + 1;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
    else//理性
    {
        ration = ration + 1;
        intro = intro + 1;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
}
//16受监督
function Cal_Shoujiandu()
{
    if(ration % 2 == 0)//非理性
    {
        ration = ration + 1;
        intro = intro + 1;
        funNe = funNe + 0;
        funFe = funFe + 1;
    }
    else//理性
    {
        ration = ration + 1;
        intro = intro + 1;
        funNe = funNe + 1;
        funFe = funFe + 0;
    }
}