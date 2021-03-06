#ifndef __SPIDER_H__
#define __SPIDER_H__

#include "driver.h"
#include "device.h"

#define SPIDER_POLLING_MS			1000

class SPIDER : public Device {
	private:
		enum { s_detect } state;
		TickType_t tickcnt, polling_tickcnt;

	public:
		// constructor
		SPIDER();
		// override
		void init(void);
		void process(Driver *drv);
		int prop_count(void);
		bool prop_name(int index, char *name);
		bool prop_unit(int index, char *unit);
		bool prop_attr(int index, char *attr);
		bool prop_read(int index, char *value);
		bool prop_write(int index, char *value);
		// method
		char* random();
        	void forward(void);
		void backward(void);
		void turn_left(void);
		void turn_right(void);
		void dance(void);
		void greeting(void);
};

#endif
