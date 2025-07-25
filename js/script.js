// js/script.js
let tasks = [];

function addTask() {
    // fungsi untuk menambahkan task
    const taskInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    // cek apakah input task dan tanggal tidak kosong
    if (taskInput.value === "" || dateInput.value === "") {
        // alert tanggal dan task tidak boleh kosong
        alert("Please enter a task and a date.");
    } else {
        // tambah task ke dalam array tasks
        tasks.push({
            title: taskInput.value,
            date: dateInput.value,
            completed: false,
        });

        renderTasks();
    }

}

function removeTask(index) {
    // Hapus task pada index tertentu
    tasks.splice(index, 1);
    renderTasks();
}

function removeAllTask() {
    // Hapus semua task
    tasks = [];

    renderTasks();
}
// let isFiltered = false;

// function toggleFilter() {
//     // Toggle filter: jika belum difilter, urutkan berdasarkan tanggal terdekat
//     isFiltered = !isFiltered;
//     if (isFiltered) {
//         tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
//     }
//     renderTasks();
// }
let isFiltered = false;
let originalTasks = [];

function toggleFilter() {
    // Jika belum difilter, simpan urutan asli lalu sort
    if (!isFiltered) {
        originalTasks = [...tasks]; // simpan urutan asli
        tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
        isFiltered = true;
    } else {
        tasks = [...originalTasks]; // kembalikan urutan asli
        isFiltered = false;
    }
    renderTasks();
}

// function completeTask(index) {
//     // Function to mark a task as completed
//     tasks[index].completed = true;
// }
function completeTask(index) {
    // fungsi untuk menandai task sebagai selesai
    tasks[index].completed = !tasks[index].completed;
    renderTasks();

}

function renderTasks() {
    // fungsi untuk menampilkan task ke dalam list
    const taskList = document.getElementById("todo-list");
    taskList.innerHTML = ""; // hapus isi list sebelum menambahkan task baru

     if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks available</p>";
        return;
    }

    // tasks.forEach((task, index) => {
    //     taskList.innerHTML += `
    //     <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
    //                 <span>${task.title}</span>
    //                 <div>
    //                     <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index});">Complete</button>
    //                     <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md">Delete</button>
    //                 </div>
    //             </li>
    //     `;
    // });
//     tasks.forEach((task, index) => {
//     taskList.innerHTML += `
//     <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
//         <span>${task.title}</span>
//         <div>
//             <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index});">Complete</button>
//             <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="removeTask(${index});">Delete</button>
//         </div>
//     </li>
//     `;
// });
    // tasks.forEach((task, index) => {
    //     taskList.innerHTML += `
    //     <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
    //         <span>${task.title} - ${new Date(task.date).toLocaleDateString()}</span>
    //         <div>
    //             <button type="button" class="px-[10px] py-[2px] bg-green-500 text-white rounded-md" onclick="completeTask(${index});">Complete</button>
    //             <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="removeTask(${index});">Delete</button>
    //         </div>
    //     </li>
    //     `;
    // });
    tasks.forEach((task, index) => {
        const buttonLabel = task.completed ? "Complete" : "Incomplete";
        const buttonColor = task.completed ? "bg-green-500" : "bg-gray-400";
        const textDecoration = task.completed ? "line-through" : "none";
        taskList.innerHTML += `
        <li class="todo-item flex justify-between items-center bg-white p-4 mb-2">
            <span style="text-decoration:${textDecoration}">${task.title} - ${new Date(task.date).toLocaleDateString()}</span>
            <div>
                <button type="button" class="px-[10px] py-[2px] ${buttonColor} text-white rounded-md" onclick="completeTask(${index});">${buttonLabel}</button>
                <button class="px-[10px] py-[2px] bg-red-500 text-white rounded-md" onclick="removeTask(${index});">Delete</button>
            </div>
        </li>
        `;
    });
}
