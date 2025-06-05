
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Upload } from "lucide-react";

const AddPlanDialog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    planName: "",
    documentNumber: "",
    issueDate: "",
    contentSummary: "",
    status: "",
    attachedFile: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // TODO: Implement actual form submission to backend
    setOpen(false);
    setFormData({
      planName: "",
      documentNumber: "",
      issueDate: "",
      contentSummary: "",
      status: "",
      attachedFile: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachedFile: file }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Thêm kế hoạch mới
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Thêm Kế hoạch Công tác Mới</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="planName">Tên Kế hoạch *</Label>
              <Input
                id="planName"
                value={formData.planName}
                onChange={(e) => setFormData(prev => ({ ...prev, planName: e.target.value }))}
                placeholder="Nhập tên kế hoạch..."
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="documentNumber">Số hiệu văn bản gốc *</Label>
              <Input
                id="documentNumber"
                value={formData.documentNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, documentNumber: e.target.value }))}
                placeholder="Ví dụ: KH-001/2024"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="issueDate">Ngày ban hành *</Label>
              <Input
                id="issueDate"
                type="date"
                value={formData.issueDate}
                onChange={(e) => setFormData(prev => ({ ...prev, issueDate: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Trạng thái *</Label>
              <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn trạng thái..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">Mới</SelectItem>
                  <SelectItem value="in-progress">Đang thực hiện</SelectItem>
                  <SelectItem value="completed">Hoàn thành</SelectItem>
                  <SelectItem value="cancelled">Tạm hủy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contentSummary">Nội dung tóm tắt</Label>
            <Textarea
              id="contentSummary"
              value={formData.contentSummary}
              onChange={(e) => setFormData(prev => ({ ...prev, contentSummary: e.target.value }))}
              placeholder="Mô tả chi tiết nội dung kế hoạch..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="attachment">Đính kèm văn bản kế hoạch gốc</Label>
            <div className="flex items-center gap-2">
              <Input
                id="attachment"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="file:mr-2 file:px-3 file:py-1 file:border-0 file:bg-blue-50 file:text-blue-700 file:rounded-md"
              />
              <Upload className="h-4 w-4 text-slate-400" />
            </div>
            {formData.attachedFile && (
              <p className="text-sm text-slate-600">
                Đã chọn: {formData.attachedFile.name}
              </p>
            )}
            <p className="text-xs text-slate-500">
              Hỗ trợ: PDF, Word, hình ảnh (tối đa 10MB)
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Lưu Kế hoạch
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              Hủy
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlanDialog;
