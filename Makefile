.PHONY: build start

start:
	docker run --name bine-website -it --rm -p 5001:80 bine-website

build:
	docker build --no-cache -f Dockerfile -t bine-website .

stop:
	docker kill bine-website