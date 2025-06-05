
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Plus } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const AddHeritageDialog = () => {
  const [open, setOpen] = useState(false);
  const [inspectionDate, setInspectionDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
    status: "",
    description: "",
    issues: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Heritage data:", { ...formData, inspectionDate });
    // TODO: Implement actual submission logic
    setOpen(false);
    // Reset form
    setFormData({
      name: "",
      location: "",
      type: "",
      status: "",
      description: "",
      issues: ""
    });
    setInspectionDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Thêm Di tích mới
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Thêm Di tích mới</DialogTitle>
          <DialogDescription>
            Nhập thông tin chi tiết về di tích lịch sử mới
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Tên di tích *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Nhập tên di tích"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Vị trí *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Nhập địa chỉ vị trí"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="type">Loại hình *</Label>
              <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn loại hình di tích" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Di tích lịch sử">Di tích lịch sử</SelectItem>
                  <SelectItem value="Di tích tôn giáo">Di tích tôn giáo</SelectItem>
                  <SelectItem value="Di tích kiến trúc">Di tích kiến trúc</SelectItem>
                  <SelectItem value="Di tích chiến tranh">Di tích chiến tranh</SelectItem>
                  <SelectItem value="Di tích khảo cổ">Di tích khảo cổ</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Trạng thái *</Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tốt">Tốt</SelectItem>
                  <SelectItem value="Cần bảo trì">Cần bảo trì</SelectItem>
                  <SelectItem value="Hư hỏng">Hư hỏng</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Ngày kiểm tra cuối</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !inspectionDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {inspectionDate ? format(inspectionDate, "dd/MM/yyyy") : "Chọn ngày kiểm tra"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={inspectionDate}
                  onSelect={setInspectionDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả chi tiết</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Nhập mô tả chi tiết về di tích"
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="issues">Vấn đề hiện tại</Label>
            <Textarea
              id="issues"
              value={formData.issues}
              onChange={(e) => handleInputChange("issues", e.target.value)}
              placeholder="Mô tả các vấn đề cần chú ý (nếu có)"
              className="min-h-[80px]"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Hủy
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Lưu Di tích
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddHeritageDialog;
