import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Hint } from "@/components/ui/hint";
interface UserAvatarProps {
  src?: string;
  borderColor?: string;
  fallback?: string;
  name?: string;
}
const UserAvatar = ({ src, name, borderColor, fallback }: UserAvatarProps) => {
  return (
    <Hint label={name || "Anonymous"}>
      <Avatar style={{ outlineColor:borderColor }} className="outline  shadow-md h-8 w-8">
        <AvatarImage src={src} alt={name} />
        <AvatarFallback className="font-bold font-xs">{fallback}</AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
