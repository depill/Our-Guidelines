ifndef COMPONENT
	COMPONENT := eslint-config-icelandair
endif

ifndef PROJECT_NAME
	PROJECT_NAME := our-guidelines
endif

ifndef DOCKER_REGISTRY_HOST
	DOCKER_REGISTRY_HOST := docker.icelandairlabs.com
endif

ifndef IMAGE_TAG
	IMAGE_TAG := latest
endif

ifndef DOCKER_IMAGE
	DOCKER_IMAGE := ${DOCKER_REGISTRY_HOST}/${PROJECT_NAME}/${COMPONENT}:${IMAGE_TAG}
endif

docker:
	docker build -t ${DOCKER_IMAGE} .

docker-push:
	docker push ${DOCKER_IMAGE}

docker-pull:
	docker pull ${DOCKER_IMAGE}

docker-shell:
	docker run -it --rm ${DOCKER_IMAGE} bash

docker-test:
	docker run --rm \
		-w /usr/src \
		${DOCKER_IMAGE} \
		npm run --silent test
	sudo chown -R ${USER}:staff .

docker-publish:
	docker run --rm \
		-v ~/.npmrc:/usr/src/.npmrc
		-w /usr/src \
		${DOCKER_IMAGE} \
		./bin/publish
	sudo chown -R ${USER}:staff .
