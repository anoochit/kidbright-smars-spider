#include <stdio.h>
#include <string.h>
#include <math.h>
#include "esp_system.h"
#include "kidbright32.h"
#include "spider.h"


SPIDER::SPIDER() {
	polling_ms = SPIDER_POLLING_MS;
}

void SPIDER::init(void) {
	state = s_detect;
	initialized = true;
}

int SPIDER::prop_count(void) {
	// not supported
	return 0;
}

bool SPIDER::prop_name(int index, char *name) {
	// not supported
	return false;
}

bool SPIDER::prop_unit(int index, char *unit) {
	// not supported
	return false;
}

bool SPIDER::prop_attr(int index, char *attr) {
	// not supported
	return false;
}

bool SPIDER::prop_read(int index, char *value) {
	// not supported
	return false;
}

bool SPIDER::prop_write(int index, char *value) {
	// not supported
	return false;
}

void SPIDER::process(Driver *drv) {
}

char* SPIDER::random() {
    return "SPIDER-random";
}

void SPIDER::forward(void) {
}

void SPIDER::backward(void) {
}

void SPIDER::turn_left(void) {
}

void SPIDER::turn_right(void) {
}

void SPIDER::dance(void) {
}

void SPIDER::greeting(void) {
}
