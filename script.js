function download() {
    const repoUrl = document.getElementById('repoUrl').value;
    const branchName = document.getElementById('branchName').value;
    const customApi = document.getElementById('customApi').value;

    if (!repoUrl) {
        document.getElementById('status').innerText = '请输入有效的GitHub仓库链接！';
        return;
    }

    let downloadUrl;
    if (customApi) {
        downloadUrl = `${customApi}${encodeURIComponent(repoUrl)}/archive/refs/heads/${branchName}.zip`;
    } else {
        downloadUrl = `${repoUrl}/archive/refs/heads/${branchName}.zip`;
    }

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = 'repository.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.getElementById('status').innerText = '下载已触发，请检查您的下载文件夹。';
}
