
document.addEventListener('click', function(event) {
    const accountSection = document.querySelector('.account-section');
    const toggle = document.getElementById('account-toggle');
    if (accountSection && toggle && !accountSection.contains(event.target) && toggle.checked) {
        toggle.checked = false;
    }
});

// 数字动态上升动画（Counter Animation）
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    
    counters.forEach(counter => {
        const targetAttr = counter.getAttribute("data-target");
        // 如果目标值是纯数字才执行动画
        const target = +targetAttr;
        
        if (!isNaN(target)) {
            let count = 0;
            const speed = target / 30; // 动画速度调节
            
            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 40);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        }
    });
});