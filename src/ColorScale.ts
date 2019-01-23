import { Color } from "./Color";

export type ColorScaleArgument = [number, string];

export class ColorScale {
    private palette: ColorScaleArgument[];

    constructor(palette: ColorScaleArgument[]) {
        this.palette = palette;
    }

    getColor = (p) => {
        const palette = Object.create(this.palette);

        palette[0][0] = 0;
        palette[palette.length - 1][0] = 1;

        let colors = palette.map(item => { return new Color(item[1]); });

        if (p >= 1) {
            let color = new Color(palette[palette.length-1][1]);
            color.a = 255;
            return color.toString();
        }

        for (let i = 0; i < palette.length; i++) {
            if (palette[i][0] > p) {
                let width = palette[i][0] - palette[i-1][0];
                let color1 = colors[i-1];
                let color2 = colors[i];
                let k = (p - palette[i-1][0]) / width;

                let channels = ['r', 'g', 'b', 'a'].map(function(ch) { return Math.round(color1[ch] + (color2[ch] - color1[ch]) * k); });
                channels[3] = 1;
                return 'rgba(' + channels.join(',') + ')';
            }
        }
    };
}