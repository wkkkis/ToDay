const form = document.querySelector(".feedback_form");
const token = "5524988420:AAHlLWVUBHuUDEGw_rhk3sgKpmo6Ab_UnlU";
const chat_id = -640614179;

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let hz = e.target.elements.hz.value;
    let hobby = e.target.elements.hobby.value;

    let message = `Имя: <b>${name || "не найдено"}</b>, Хобби: <b>${
        hobby || "не найдено"
    }</b>`;

    await axios
        .post(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`
        )
        .then((response) => {
            alert("Сообщение успешно отправилось!");
        })
        .catch((e) => {
            alert("Что-то пошло не так!");
        });
});
