FROM registry.cn-shenzhen.aliyuncs.com/huangxincheng/java-alpine-openjdk8-jdk
MAINTAINER huangxincheng 249270087@qq.com
VOLUME /tmp
EXPOSE 8080
RUN mkdir -p /home/ci && chmod 755 /home/ci
COPY ./eolinker_os-4.0.jar /home/ci
ENTRYPOINT ["/sbin/tini", "--"]
CMD java ${JAVA_OPTS} -jar home/ci/eolinker_os-4.0.jar