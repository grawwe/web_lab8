alert("Коня имей, да владеть им умей. " +
    "Вовремя пешка дороже ферзя. На ферзя надейся, а за пешками присматривай. " +
    "Не жди пата после мата. Семь раз проверь — один раз возьми. Лишней фигурой партии не испортишь. " +
    "За двумя конями погонишься — ни одного не поймаешь Много шахов, а мат один. " +
    "Лишняя пешка — не обуза. Один король на доске — не воин. По дебюту встречают, по эндшпилю провожают. " +
    "На одном дебюте далеко не уедешь. Пешки счет любят.")

const king = document.querySelector('.figure')
const queen = document.querySelector('.figure')
const elephant = document.querySelector('.figure')
const horse = document.querySelector('.figure')
const rook = document.querySelector('.figure')
const pawn = document.querySelector('.figure')

const squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

king.addEventListener('dragStart', dragStart)
queen.addEventListener('dragStart', dragStart)
elephant.addEventListener('dragStart', dragStart)
horse.addEventListener('dragStart', dragStart)
rook.addEventListener('dragStart', dragStart)
pawn.addEventListener('dragStart', dragStart)

let beingDragged

function dragStart(e){
    beingDragged = e.target
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    const enemy = 'figure'
    const isEnemy = e.target?.classList.contains(enemy)
    if (isEnemy) {
        e.target.parentNode.append(beingDragged)
        e.target.remove()
    } else
        e.target.append(beingDragged)
}