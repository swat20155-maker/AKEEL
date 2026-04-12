const ADMIN_PASSWORD = "1234";

function openAdminLogin() {
  document.getElementById('adminLogin').classList.add('active');
}

function login() {
  const pass = document.getElementById('adminPass').value;

  if (pass === ADMIN_PASSWORD) {
    document.getElementById('adminLogin').classList.remove('active');
    document.getElementById('adminPanel').classList.add('active');
  } else {
    alert("Wrong password ❌");
  }
}
async function submitStory() {
  const youtube = document.getElementById("youtubeUrl").value;
  const file = document.getElementById("videoFile").files[0];

  let videoUrl = null;

  // 🎬 إذا يوتيوب
  if (youtube) {
    videoUrl = youtube;
  }

  // 📤 إذا فيديو مرفوع
  if (file) {
    videoUrl = await uploadToImageKit(file);
  }

  addStory("My Story", "", null, videoUrl);
}