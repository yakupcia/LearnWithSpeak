type IIcon = 'ant' | 'entypo' | 'evil' | 'feather' | 'ion' | 'matcomm' | 'mat';

interface IIconProps {
  type: IIcon;
  name: string;
  size?: number;
  color?: string;
}

export type {IIconProps, IIcon};
