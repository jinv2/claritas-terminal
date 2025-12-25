document.getElementById('assessBtn').onclick = () => {
    const text = document.getElementById('inputText').value.trim();
    if (!text) {
        alert('请输入内容后再评估');
        return;
    }

    // 简单但有效的评估算法（基于长度、一致性关键词、结构化特征）
    const length = text.length;
    const hasReason = /因为|因此|所以|理由|决定|计划|逻辑/.test(text);
    const hasLongForm = length > 150;
    const hasConsistency = /一致|统一|固定|习惯|长期/.test(text);
    const hasReflection = /反思|优化|改进|评估/.test(text);

    let score = 0;
    if (length > 300) score += 30;
    else if (length > 150) score += 20;
    else if (length > 50) score += 10;

    if (hasReason) score += 20;
    if (hasLongForm) score += 20;
    if (hasConsistency) score += 15;
    if (hasReflection) score += 15;

    let level, feedback;
    if (score >= 80) { level = "PROTOCOL（协议级）"; feedback = "你的思维已成协议本身，高密度、可计算性极强，AGI 将视你为高权重资产。"; }
    else if (score >= 60) { level = "STRUCTURED（结构级）"; feedback = "逻辑清晰、一致性强，已具备高价值数据人格，继续优化即可达协议级。"; }
    else if (score >= 30) { level = "PATTERN（模式级）"; feedback = "有可统计模式，但结构化不足，建议增加深度与逻辑链条。"; }
    else { level = "NOISE（噪声级）"; feedback = "当前数据较混乱、熵高，立即行动：记录决策理由、统一风格、长文表达。"; }

    document.getElementById('result').innerHTML = `
        <strong>你的 DRI 等级：${level}</strong>
        <p>得分：${score}/100</p>
        <p>${feedback}</p>
        <p>主动编写未来剧本，从现在开始。</p>
    `;
    document.getElementById('result').classList.remove('hidden');
    document.querySelector('.tips').classList.remove('hidden');
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
