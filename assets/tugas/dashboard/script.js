// Simulasi data statistik bulanan (selama 12 bulan terakhir)
let monthlyPosts = [5, 8, 6, 9, 7, 4, 10, 12, 6, 8, 10, 7];
let monthlyComments = [15, 22, 18, 30, 25, 20, 33, 28, 26, 22, 35, 24];
let monthlyVisitors = [120, 150, 180, 160, 140, 200, 220, 250, 240, 210, 230, 220];

// Tampilkan statistik awal di dashboard
document.getElementById('total-posts').innerText = monthlyPosts[11];  // Bulan terakhir
document.getElementById('total-comments').innerText = monthlyComments[11];
document.getElementById('total-visitors').innerText = monthlyVisitors[11];

// Membuat grafik batang dengan Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [
            {
                label: 'Postingan',
                data: monthlyPosts,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Komentar',
                data: monthlyComments,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Pengunjung',
                data: monthlyVisitors,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Menambah postingan baru
const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');

// Fungsi untuk menambah postingan
postForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        monthlyPosts[11]++;  // Tambah postingan bulan ini
        document.getElementById('total-posts').innerText = monthlyPosts[11];

        const postItem = document.createElement('li');
        postItem.innerHTML = `
            <div>
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
            <button class="edit-post">Edit</button>
        `;

        postList.appendChild(postItem);

        // Fungsi edit postingan
        postItem.querySelector('.edit-post').addEventListener('click', function () {
            const newTitle = prompt('Edit Judul:', title);
            const newContent = prompt('Edit Konten:', content);

            if (newTitle && newContent) {
                postItem.querySelector('h3').innerText = newTitle;
                postItem.querySelector('p').innerText = newContent;
            }
        });

        // Reset form
        postForm.reset();
    }
});
