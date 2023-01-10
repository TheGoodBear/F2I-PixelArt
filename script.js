// global variables
var divMain, divTools;
const GridHeight = 20;
const GridWidth = 20;
const Colors = ["white", "black", "blue", "lightblue", "green", "lightgreen", "yellow", "pink", "red"];
const ColorsFr = ["Blanc", "Noir", "Bleu", "Bleu clair", "Vert", "Vert clair", "Jaune", "Rose", "Rouge"];

var CurrentColor = "white";
var IsDrawing = false;


// methods
window.onload = function()
{

    divMain = document.getElementById("divMain");
    divTools = document.getElementById("divTools");

    DrawGrid();
    InitializeTools();

}


function SwitchDrawing(
    OnOff)
{

    IsDrawing = OnOff;

}


function DrawGrid()
{

    const GridData = getComputedStyle(divMain);
    const WindowHeight = window.innerHeight - 50;

    // make calculations
    const CellHeight = Math.floor(WindowHeight / GridHeight);
    const CellWidth = Math.floor(GridData.width.substring(0, GridData.width.length - 2) / GridWidth);

    // generate dynamic HTML in string
    let InnerHTML = "<table><tbody>";
    for(row = 0; row < GridWidth; row++)
    {
        InnerHTML += "<tr style='height: " + CellHeight + "px'>";
        
        for(column = 0; column < GridHeight; column++)
        {
            InnerHTML += "<td style='width: " + CellWidth + "px' onmousedown='SwitchDrawing(true)' onmouseup='SwitchDrawing(false)' onmouseover='FillCell(this)'>"
            InnerHTML += "</td>";
        }

        InnerHTML += "</tr>";
    }
    InnerHTML += "</tbody></table>";

    // add dynamic HTML string to DOM object
    // alert(InnerHTML);
    divMain.innerHTML = InnerHTML;

}


function InitializeTools()
{

    Colors.forEach(element => console.log(element));

    let InnerHTML = "";
    for(c = 0; c < Colors.length; c++)
    {
        InnerHTML += "<div style='background-color: " + Colors[c] + "' title='" + ColorsFr[c] + "' onclick='ChangeColor(this)'>&nbsp;</div>";
    }

    divTools.innerHTML = InnerHTML;

}


function ChangeColor(
    divColor)
{
    
    const ColorData = getComputedStyle(divColor);

    CurrentColor = ColorData.backgroundColor;
    divTools.style.borderColor = CurrentColor;

}


function FillCell(
    divCell)
{

    if(IsDrawing)
        divCell.style.backgroundColor = CurrentColor;

}