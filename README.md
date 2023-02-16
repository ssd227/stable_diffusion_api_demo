### docker打包镜像--sddemo
    docker build -t sddemo .

### 运行gpu镜像--sddemo
    docker run --gpus all -it -p 3000:3000  sddemo

### 服务启动命令（手动）
    cd /sd_demo/back_flask
    flask --app app run

    cd /sd_demo/front_react
    npm start

### 挂载文件开发（测试使用）
    docker run -p 3000:3000 `
        --gpus all -it `
        -w /sd_demo --mount type=bind,src="$(pwd)",target=/sd_demo `
        sddemo

    react端口：3000，flask端口：5000