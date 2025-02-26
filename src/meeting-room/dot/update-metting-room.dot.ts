import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingRoomDto } from './create-meeting-room.dto';

export class UpdateMeetingRoomDto extends CreateMeetingRoomDto {
  @IsNotEmpty({
    message: 'id 不能为空',
  })
  id: number;
}
