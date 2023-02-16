FROM pytorch/pytorch:1.13.1-cuda11.6-cudnn8-runtime

RUN mkdir /sd_demo
WORKDIR /sd_demo


# update the repository sources list
# and install dependencies
RUN apt-get update
RUN apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs
# confirm installation
RUN node -v
RUN npm -v


# python lib
RUN pip install Flask
RUN pip install accelerate
RUN pip install diffusers["torch"]
RUN pip install --upgrade diffusers transformers scipy

COPY ./ /sd_demo

RUN cd ./front_react && npm install


# 启动服务 TODO!!!


EXPOSE 3000
EXPOSE 5000


