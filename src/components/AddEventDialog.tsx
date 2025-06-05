
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

const AddEventDialog = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    organizer: "",
    expectedVisitors: "",
    description: "",
    status: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event data:", { ...formData, startDate, endDate });
    // TODO: Implement actual submission logic
    setOpen(false);
    // Reset form
    setFormData({
      name: "",
      location: "",
      organizer: "",
      expectedVisitors: "",
      description: "",
      status: ""
    });
    setStartDate(undefined);
    setEndDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          Tạo Sự kiện mới
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tạo Sự kiện mới</DialogTitle>
          <DialogDescription>
            Nhập thông tin chi tiết về sự kiện du lịch mới
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Tên sự kiện *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Nhập tên sự kiện"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Địa điểm *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Nhập địa điểm tổ chức"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Ngày bắt đầu *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd/MM/yyyy") : "Chọn ngày bắt đầu"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Ngày kết thúc *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd/MM/yyyy") : "Chọn ngày kết thúc"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organizer">Đơn vị tổ chức *</Label>
              <Input
                id="organizer"
                value={formData.organizer}
                onChange={(e) => handleInputChange("organizer", e.target.value)}
                placeholder="Nhập đơn vị tổ chức"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expectedVisitors">Dự kiến du khách</Label>
              <Input
                id="expectedVisitors"
                type="number"
                value={formData.expectedVisitors}
                onChange={(e) => handleInputChange("expectedVisitors", e.target.value)}
                placeholder="Số lượng du khách dự kiến"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Trạng thái *</Label>
            <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn trạng thái sự kiện" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sắp diễn ra">Sắp diễn ra</SelectItem>
                <SelectItem value="Đang diễn ra">Đang diễn ra</SelectItem>
                <SelectItem value="Đã kết thúc">Đã kết thúc</SelectItem>
                <SelectItem value="Đã hủy">Đã hủy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Mô tả sự kiện</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Nhập mô tả chi tiết về sự kiện"
              className="min-h-[100px]"
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Hủy
            </Button>
            <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
              Tạo Sự kiện
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEventDialog;
