const
    tileColor2 = '#EEE4DA',
    tileColor4 = '#EEE0C6',
    tileColor8 = '#F9B377',
    tileColor16 = '#FF9B60',
    tileColor32 = '#CA6A48',
    tileColor64 = '#EC6233',
    tileColor128 = '#E8C462',
    tileColor256 = '#E0BA55',
    tileColor512 = '#F3C54B',
    tileColor1024 = '#F2C138',
    tileColor2048 = '#F3BD29';

export function getColorByValue(value) {
    switch (value) {
        case 2:
            return tileColor2;
        case 4:
            return tileColor4;
        case 8:
            return tileColor8;
        case 16:
            return tileColor16;
        case 32:
            return tileColor32;
        case 64:
            return tileColor64;
        case 128:
            return tileColor128;
        case 256:
            return tileColor256;
        case 512:
            return tileColor512;
        case 1024:
            return tileColor1024;
        case 2048:
            return tileColor2048;
        default:
            return tileColor2048;
    }
}