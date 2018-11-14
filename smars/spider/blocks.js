Blockly.Blocks['spider.forward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_FORWARD_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
     this.setTooltip(Blockly.Msg.SPIDER_FORWARD_TOOLTIP);
     this.setHelpUrl(Blockly.Msg.SPIDER_FORWARD_HELPURL);
    }
  };


  Blockly.Blocks['spider.backward'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPIDER_BACKWARD_TITLE);
        this.appendValueInput("STEP")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
     this.setTooltip(Blockly.Msg.SPIDER_BACKWARD_TOOLTIP);
     this.setHelpUrl(Blockly.Msg.SPIDER_BACKWARD_HELPURL);
    }
  };