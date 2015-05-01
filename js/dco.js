define([
    'application'
],
    
    function(App) {
        function DCO(options) {
            this.output = [];
            this.input = [];
            this.oscillators = [];
            
            _.each(options.waveform, function(waveform, i) {
                this.output[i] = App.context.createOscillator();
                this.output[i].type = waveform;
                this.output[i].frequency.value = options.frequency;
                this.output[i].start(0);
                
                this.oscillators.push(this.output[i]);
            }, this);
            
            this.subOsc = App.context.createOscillator();
            this.subOsc.type = 'square';
            this.subOsc.frequency.value = options.frequency / 2;
            this.subOsc.start(0);
            this.oscillators.push(this.subOsc);
            
            this.subLevel = App.context.createGain();
            this.subOsc.connect(this.subLevel);
            this.subLevel.gain.value = options.subLevel;
            this.output.push(this.subLevel);
            
            _.each(this.output, function(outputNode, i) {
                if(outputNode instanceof OscillatorNode) {
                    this.input.push(outputNode.frequency);
                }
            }, this);
            this.input.push(this.subOsc.frequency);
        }
        
        DCO.prototype.off = function(releaseTime) {
            var now = App.context.currentTime;
            _.each(this.oscillators, function(oscillator) {
                oscillator.stop(now + releaseTime);
            });
        };
        
        DCO.prototype.sub = function(value) {
            var now = App.context.currentTime;
            this.subLevel.gain.cancelScheduledValues(now);
            this.subLevel.gain.setValueAtTime(value, now);
        };
        
        DCO.prototype.range = function() {
            //stub
        };
        
        return DCO;
    }
);