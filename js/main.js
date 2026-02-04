/*
=====================================
 Project: lystuw25-tet4-phia-sau-nhung-du-day
 Created By: BaoTQ
 Last Modified: 04/02/2026
=====================================
*/

// ===== Story Data =====
const storyData = {
    1: {
        title: "Câu chuyện về Mẹ",
        content: `
            <p><strong>Minh họa 1 (Mẹ):</strong> Ảnh bà mẹ đứng giữa siêu thị hiện đại, tay cầm giỏ hàng đầy ắp nhưng mắt nhìn xa xăm.</p>
            
            <p>"Hãy nhìn mẹ trong câu chuyện của chúng ta. Ngày nay, nhu cầu được đáp ứng quanh năm. Khi cái ngon không còn là hiếm, cái đẹp không còn là đợi, giá trị vật chất đặc biệt của Tết giảm đi, kéo theo sự bão hòa trong ý thức."</p>
            
            <p><strong>Phân tích Triết học:</strong> <em>"Vật chất thay đổi, cảm nhận thay đổi."</em></p>
            
            <p>"Sự thay đổi về kinh tế đã 'giải phóng' chúng ta khỏi sự thiếu thốn, nhưng cũng vô tình làm mất đi động lực tích cực của ý thức: đó là niềm khao khát và sự trân trọng những giá trị hiếm hoi."</p>
        `
    },
    2: {
        title: "Câu chuyện về Anh lính",
        content: `
            <p><strong>Minh họa 2 (Anh lính):</strong> Ảnh anh lính gác biên thùy, smartphone đặt trên bệ đá hiện cuộc gọi Video call với mẹ.</p>
            
            <p>"Người con trai trong gia đình là một chiến sĩ biên phòng. Công nghệ giúp anh thấy mẹ, thấy bánh chưng ở quê. Nhưng video call không thể truyền đi mùi khói bếp, không thể thay thế một cái ôm bằng xương bằng thịt."</p>
            
            <p><strong>Phân tích Triết học:</strong> <em>Hình ảnh trái tim lồng trong vi mạch.</em></p>
            
            <p>"Khi công nghệ (vật chất) thay thế cho sự hiện diện thật, ý thức về sự gắn kết bị 'ảo hóa'. Chúng ta có thể thấy nhau rất rõ, nhưng cảm xúc lại cảm thấy rất xa. Sự kết nối vật lý bị đứt gãy làm phai nhạt ý thức sum vầy."</p>
        `
    },
    3: {
        title: "Câu chuyện về Ông nội",
        content: `
            <p><strong>Minh họa 3 (Ông nội):</strong> Ảnh ông nội loay hoay trước cái Smartphone để nhận lì xì online của cháu, gương mặt bất lực.</p>
            
            <p>"Ông nội trong gia đình cảm thấy bị bỏ lại phía sau. Để 'hợp thời', ông phải gồng mình làm quen với những vật chất xa lạ. Sự vất vả của người già trong thời đại số là nỗi khổ tâm khi ý thức về giá trị cũ bị coi là lạc hậu."</p>
            
            <p><strong>Sự biến đổi trong ý thức:</strong> <em>Hình ảnh mỗi thành viên ngồi một góc dùng điện thoại trong cùng một phòng.</em></p>
            
            <p>"Từ sự thay đổi vật chất, ý thức về Tết bị 'cá nhân hóa'. Tết không còn là thời khắc thiêng liêng chung, mà trở thành một kỳ nghỉ dài. Người về quê, người đi du lịch, người chọn cô đơn một mình."</p>
        `
    }
};

// ===== DOM Elements =====
const splashScreen = document.getElementById('splashScreen');
const mainContent = document.getElementById('mainContent');
const enterBtn = document.getElementById('enterBtn');
const sideNav = document.getElementById('sideNav');
const sideNavLinks = document.querySelectorAll('.side-nav-link');

// Firework elements
const lightBtn = document.getElementById('lightBtn');
const fuse = document.getElementById('fuse');
const fireworkBody = document.getElementById('fireworkBody');
const fireworkExplosion = document.getElementById('fireworkExplosion');

// Modal elements
const videoModal = document.getElementById('videoModal');
const mainVideo = document.getElementById('mainVideo');
const videoEnding = document.getElementById('videoEnding');
const closeModal = document.getElementById('closeModal');
const closeEndingBtn = document.getElementById('closeEndingBtn');

// Story modal elements
const storyModal = document.getElementById('storyModal');
const closeStoryModal = document.getElementById('closeStoryModal');
const storyBtns = document.querySelectorAll('.story-btn');
const storyModalImage = document.getElementById('storyModalImage');
const storyModalTitle = document.getElementById('storyModalTitle');
const storyModalContent = document.getElementById('storyModalContent');

// Info modal elements
const qrBtn = document.getElementById('qrBtn');
const githubBtn = document.getElementById('githubBtn');
const shareBtn = document.getElementById('shareBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const qrModal = document.getElementById('qrModal');
const githubModal = document.getElementById('githubModal');
const shareModal = document.getElementById('shareModal');
const closeQR = document.getElementById('closeQR');
const closeGithub = document.getElementById('closeGithub');
const closeShare = document.getElementById('closeShare');
const copyGithubBtn = document.getElementById('copyGithubBtn');
const githubLink = document.getElementById('githubLink');

// Thanks section elements
const celebrateBtn = document.getElementById('celebrateBtn');
const celebrationFireworks = document.getElementById('celebrationFireworks');

// ===== Splash Screen Animation =====
enterBtn.addEventListener('click', () => {
    splashScreen.classList.remove('active');
    
    setTimeout(() => {
        mainContent.classList.add('active');
        document.body.style.overflow = 'auto';
        sideNav.classList.add('active');
    }, 800);
});

// ===== Side Navigation =====
sideNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active state
        sideNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Scroll to section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNavLink();
            ticking = false;
        });
        ticking = true;
    }
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            sideNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== Firework Animation =====
let fireworkLaunched = false;

lightBtn.addEventListener('click', () => {
    if (fireworkLaunched) return;
    
    fireworkLaunched = true;
    lightBtn.classList.add('disabled');
    
    fuse.classList.add('burning');
    
    setTimeout(() => {
        fireworkBody.classList.add('launching');
        
        setTimeout(() => {
            createFireworkExplosion();
            
            setTimeout(() => {
                showVideoModal();
                resetFirework();
            }, 2000);
        }, 800);
    }, 2000);
});

function createFireworkExplosion() {
    fireworkExplosion.classList.add('active');
    const particlesContainer = fireworkExplosion.querySelector('.explosion-particles');
    particlesContainer.innerHTML = '';
    
    const particleCount = 100;
    const colors = ['#DC143C', '#FFD700', '#FF6B6B', '#FFF8DC', '#DAA520'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 8 + 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.top = '50%';
        particle.style.left = '50%';
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 300 + 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.animate([
            {
                transform: 'translate(0, 0)',
                opacity: 1
            },
            {
                transform: `translate(${tx}px, ${ty}px)`,
                opacity: 0
            }
        ], {
            duration: Math.random() * 1000 + 1000,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
        });
        
        particlesContainer.appendChild(particle);
    }
    
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.style.position = 'absolute';
        ring.style.top = '50%';
        ring.style.left = '50%';
        ring.style.width = '20px';
        ring.style.height = '20px';
        ring.style.border = '3px solid';
        ring.style.borderColor = colors[i];
        ring.style.borderRadius = '50%';
        ring.style.transform = 'translate(-50%, -50%)';
        
        ring.animate([
            {
                width: '20px',
                height: '20px',
                opacity: 1
            },
            {
                width: '600px',
                height: '600px',
                opacity: 0
            }
        ], {
            duration: 1500,
            delay: i * 200,
            easing: 'ease-out'
        });
        
        particlesContainer.appendChild(ring);
    }
    
    playExplosionSound();
    
    setTimeout(() => {
        fireworkExplosion.classList.remove('active');
    }, 3000);
}

function playExplosionSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(80, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(40, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = audioContext.createOscillator();
                const sparkleGain = audioContext.createGain();
                
                sparkle.connect(sparkleGain);
                sparkleGain.connect(audioContext.destination);
                
                sparkle.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime);
                sparkleGain.gain.setValueAtTime(0.1, audioContext.currentTime);
                sparkleGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                
                sparkle.start(audioContext.currentTime);
                sparkle.stop(audioContext.currentTime + 0.2);
            }, i * 100);
        }
    } catch (error) {
        console.log('Audio not supported');
    }
}

function resetFirework() {
    setTimeout(() => {
        fuse.classList.remove('burning');
        fireworkBody.classList.remove('launching');
        lightBtn.classList.remove('disabled');
        fireworkLaunched = false;
    }, 1000);
}

// ===== Video Modal =====
function showVideoModal() {
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    mainVideo.play();
}

function hideVideoModal() {
    videoModal.classList.remove('active');
    videoEnding.classList.remove('active');
    document.body.style.overflow = 'auto';
    mainVideo.pause();
    mainVideo.currentTime = 0;
}

closeModal.addEventListener('click', hideVideoModal);
closeEndingBtn.addEventListener('click', hideVideoModal);

mainVideo.addEventListener('ended', () => {
    videoEnding.classList.add('active');
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal || e.target.classList.contains('modal-backdrop')) {
        hideVideoModal();
    }
});

// ===== Story Modal =====
storyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const storyId = btn.getAttribute('data-story');
        openStoryModal(storyId);
    });
});

document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('click', () => {
        const storyId = card.getAttribute('data-story');
        openStoryModal(storyId);
    });
});

function openStoryModal(storyId) {
    const story = storyData[storyId];
    if (!story) return;
    
    storyModalImage.src = `assets/images/story${storyId}.png`;
    storyModalImage.alt = story.title;
    storyModalTitle.textContent = story.title;
    storyModalContent.innerHTML = story.content;
    
    storyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

closeStoryModal.addEventListener('click', () => {
    storyModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

storyModal.addEventListener('click', (e) => {
    if (e.target === storyModal || e.target.classList.contains('modal-backdrop')) {
        storyModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== QR Modal =====
qrBtn.addEventListener('click', () => {
    qrModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    generateQRCode();
});

closeQR.addEventListener('click', () => {
    qrModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal || e.target.classList.contains('modal-backdrop')) {
        qrModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// function generateQRCode() {
//     const qrImage = document.getElementById('qrImage');
//     const currentUrl = window.location.href;
//     qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}`;
//     qrImage.alt = 'QR Code for Tet 4.0 Project';
// }

// ===== GitHub Modal =====
githubBtn.addEventListener('click', () => {
    githubModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeGithub.addEventListener('click', () => {
    githubModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

githubModal.addEventListener('click', (e) => {
    if (e.target === githubModal || e.target.classList.contains('modal-backdrop')) {
        githubModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

copyGithubBtn.addEventListener('click', () => {
    githubLink.select();
    document.execCommand('copy');
    
    const originalText = copyGithubBtn.innerHTML;
    copyGithubBtn.innerHTML = '<span class="copy-icon">✓</span><span class="copy-text">Đã copy!</span>';
    copyGithubBtn.style.background = 'linear-gradient(135deg, #90EE90, #32CD32)';
    
    setTimeout(() => {
        copyGithubBtn.innerHTML = originalText;
        copyGithubBtn.style.background = '';
    }, 2000);
});

// ===== Share Modal =====
shareBtn.addEventListener('click', () => {
    shareModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeShare.addEventListener('click', () => {
    shareModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal || e.target.classList.contains('modal-backdrop')) {
        shareModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Share functionality
document.getElementById('shareFacebook')?.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
});

document.getElementById('shareTwitter')?.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('TẾT 4.0 - PHÍA SAU NHỮNG ĐỦ ĐẦY');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
});

document.getElementById('shareLinkedin')?.addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
});

document.getElementById('shareCopyLink')?.addEventListener('click', () => {
    const copyBtn = document.getElementById('shareCopyLink');
    navigator.clipboard.writeText(window.location.href).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span>✓</span> Đã copy!';
        copyBtn.style.background = 'linear-gradient(135deg, #90EE90, #32CD32)';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    });
});

// ===== Favorite Button =====
let isFavorited = localStorage.getItem('tet4-favorited') === 'true';

function updateFavoriteButton() {
    const icon = favoriteBtn.querySelector('.icon');
    if (isFavorited) {
        icon.textContent = '⭐';
        favoriteBtn.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    } else {
        icon.textContent = '⭐';
        favoriteBtn.style.background = '';
    }
}

favoriteBtn.addEventListener('click', () => {
    isFavorited = !isFavorited;
    localStorage.setItem('tet4-favorited', isFavorited);
    updateFavoriteButton();
    
    // Show notification
    showNotification(isFavorited ? '✓ Đã thêm vào yêu thích!' : 'Đã xóa khỏi yêu thích');
});

updateFavoriteButton();

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 40px;
        background: linear-gradient(135deg, #DC143C, #8B0000);
        color: white;
        padding: 16px 24px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 600;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        z-index: 10002;
        animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// ===== Celebration Fireworks =====
let isCelebrating = false;

celebrateBtn.addEventListener('click', () => {
    if (isCelebrating) return;
    
    isCelebrating = true;
    celebrateBtn.disabled = true;
    celebrateBtn.style.opacity = '0.5';
    
    // Create continuous fireworks for 10 seconds
    const duration = 10000;
    const interval = 800;
    const startTime = Date.now();
    
    const fireworkInterval = setInterval(() => {
        if (Date.now() - startTime > duration) {
            clearInterval(fireworkInterval);
            isCelebrating = false;
            celebrateBtn.disabled = false;
            celebrateBtn.style.opacity = '1';
            return;
        }
        
        createCelebrationFirework();
    }, interval);
    
    // First firework immediately
    createCelebrationFirework();
});

function createCelebrationFirework() {
    const colors = ['#DC143C', '#FFD700', '#FF6B6B', '#FFF8DC', '#DAA520', '#FF1493', '#00CED1'];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.6) + (window.innerHeight * 0.1);
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 ${Math.random() * 10 + 5}px ${color};
        `;
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 200 + 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        celebrationFireworks.appendChild(particle);
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${tx}px, ${ty}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: Math.random() * 1000 + 1000,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)'
        }).onfinish = () => particle.remove();
    }
    
    // Add sparkle effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            const sparkleColor = colors[Math.floor(Math.random() * colors.length)];
            
            sparkle.style.cssText = `
                position: fixed;
                left: ${x + (Math.random() - 0.5) * 100}px;
                top: ${y + (Math.random() - 0.5) * 100}px;
                width: 4px;
                height: 4px;
                background: ${sparkleColor};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 10px ${sparkleColor};
            `;
            
            celebrationFireworks.appendChild(sparkle);
            
            sparkle.animate([
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: 500,
                easing: 'ease-out'
            }).onfinish = () => sparkle.remove();
        }, i * 50);
    }
    
    // Play sound
    playExplosionSound();
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.content-card, .theory-item, .analysis-item, .story-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            
            document.querySelectorAll('.cloud').forEach((cloud, index) => {
                const speed = 0.5 + (index * 0.1);
                cloud.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            document.querySelectorAll('.plum-blossom, .lucky-coin').forEach((element, index) => {
                const speed = 0.3 + (index * 0.05);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
            });
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// ===== Button Ripple Effect =====
document.querySelectorAll('button, .nav-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (videoModal.classList.contains('active')) {
            hideVideoModal();
        }
        if (storyModal.classList.contains('active')) {
            storyModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (qrModal.classList.contains('active')) {
            qrModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (githubModal.classList.contains('active')) {
            githubModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (shareModal.classList.contains('active')) {
            shareModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===== Easter Egg: Konami Code =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        triggerEasterEgg();
        konamiCode = [];
    }
});

function triggerEasterEgg() {
    const confettiCount = 150;
    const confettiColors = ['#DC143C', '#FFD700', '#FF6B6B', '#FFF8DC', '#DAA520'];
    
    for (let i = 0; i < confettiCount; i++) {
        createConfetti(confettiColors);
    }
    
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #DC143C, #FFD700);
        color: white;
        padding: 40px 60px;
        border-radius: 20px;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        z-index: 99999;
        box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
        animation: bounceIn 0.6s ease;
    `;
    message.innerHTML = '🎊 Chúc mừng năm mới! 🎊<br/><small style="font-size: 18px; opacity: 0.9;">Bạn đã tìm ra Easter Egg!</small>';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function createConfetti(colors) {
    const confetti = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * window.innerWidth;
    const endX = startX + (Math.random() - 0.5) * 200;
    const duration = Math.random() * 2000 + 2000;
    const size = Math.random() * 10 + 5;
    
    confetti.style.cssText = `
        position: fixed;
        left: ${startX}px;
        top: -20px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        z-index: 99998;
        pointer-events: none;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
    `;
    
    document.body.appendChild(confetti);
    
    confetti.animate([
        {
            transform: 'translateY(0) rotate(0deg)',
            opacity: 1
        },
        {
            transform: `translateY(${window.innerHeight + 20}px) translateX(${endX - startX}px) rotate(${Math.random() * 720}deg)`,
            opacity: 0
        }
    ], {
        duration: duration,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => confetti.remove();
}

// ===== Add slide-in animations =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Console Easter Egg =====
console.log('%c🏮 TẾT 4.0 - PHÍA SAU NHỮNG ĐỦ ĐẦY 🏮', 
    'font-size: 24px; font-weight: bold; color: #DC143C; text-shadow: 2px 2px 4px #FFD700;');
console.log('%cChúc mừng năm mới! Thử nhập lệnh Konami Code để mở Easter Egg nhé! ↑↑↓↓←→←→BA', 
    'font-size: 14px; color: #DAA520;');
console.log('%cDự án được thực hiện bởi Nhóm 5 - MLN111', 
    'font-size: 12px; color: #8B4513; font-style: italic;');

// ===== Performance Optimization =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
}

// ===== Initialize =====
console.log('🎊 Website initialized successfully!');
console.log('📱 QR Code ready');
console.log('💻 GitHub link ready');
console.log('📤 Share ready');
console.log('⭐ Favorite ready');
console.log('🎬 Video player ready');
console.log('🎆 Firework animation ready');
console.log('📖 Story modals ready');
console.log('✨ All systems go!');


/*
=====================================
 Project: lystuw25-tet4-phia-sau-nhung-du-day
 Created By: BaoTQ
 Last Modified: 04/02/2026
=====================================
*/
