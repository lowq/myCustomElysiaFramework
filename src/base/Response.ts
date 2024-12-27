export default (data: any, meta?: any) => {
  if (meta) {
    return {
      data,
      meta,
    };
  }
  return {
    data,
  };
};
enum ResponseTypeEnum {
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success",
  INFO = "info",
}

interface WApiResourceParams {
  type: ResponseTypeEnum;
  isToast?: boolean;
  message?: string | null;
  data?: any;
  meta?: any[] | null;
  errors?: any[] | null;
  auth?: any[] | null;
  additional?: any[];
  duration?: number | null;
}

export class WApiResource {
  public static wrap = "data";

  public type: ResponseTypeEnum;
  public isToast: boolean = false;
  public message: string | null = null;
  public errors: any[] | null = null;
  public data: any = null;
  public meta: any[] | null = null;
  public auth: any[] | null = null;
  public additional: any[] = [];
  public duration: number | null = null;

  constructor(params: WApiResourceParams) {
    this.type = params.type;
    this.isToast = params.isToast ?? false;
    this.message = params.message ?? null;
    this.errors = params.errors ?? null;
    this.data = params.data ?? null;
    this.meta = params.meta ?? null;
    this.auth = params.auth ?? null;
    this.additional = params.additional ?? [];
    this.duration = params.duration ?? null;
  }

  public additionalData(data: any[]): WApiResource {
    this.additional = data.length > 0 ? ["additional", data] : [];
    return this;
  }

  public with(): Record<string, any> {
    const data: Record<string, any> = {
      type: this.type,
      is_toast: this.isToast,
      message: this.message,
      errors: this.errors,
      meta: this.meta,
      auth: this.auth,
    };

    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v != null)
    );
  }

  public static error(
    message: string | null = null,
    errors: any[] | null = null,
    data: any = null,
    auth: any[] | null = null,
    additional: any[] = []
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.ERROR,
      message: message ?? "REQUEST_NOT_OK",
      errors,
      data,
      auth,
      additional,
    });
  }

  public static errorToast(
    message: string | null = null,
    errors: any[] | any | null = null,
    data: any = null,
    auth: any[] | null = null,
    additional: any[] = [],
    duration: number | null = null
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.ERROR,
      isToast: true,
      message: message ?? "REQUEST_NOT_OK",
      errors,
      data,
      auth,
      additional,
      duration,
    });
  }

  public static warning(
    message: string | null,
    errors: any[] | null,
    data: any = null,
    auth: any[] | null,
    additional: any[] = []
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.WARNING,
      message: message ?? "REQUEST_NOT_OK",
      errors,
      data,
      auth,
      additional,
    });
  }

  public static warningToast(
    message: string | null,
    errors: any[] | null,
    data: any = null,
    auth: any[] | null,
    additional: any[] = [],
    duration: number | null = null
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.WARNING,
      isToast: true,
      message: message ?? "REQUEST_NOT_OK",
      errors,
      data,
      auth,
      additional,
      duration,
    });
  }

  public static success(
    message: string | null = null,
    data: any = null,
    meta: any = null,
    auth: any[] | null = null,
    additional: any[] = []
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.SUCCESS,
      message: message ?? "REQUEST_OK",
      data,
      meta,
      auth,
      additional,
    });
  }

  public static successToast(
    message: string | null = null,
    data: any = null,
    meta: any = null,
    auth: any[] | null = null,
    additional: any[] = [],
    duration: number | null = null
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.SUCCESS,
      isToast: true,
      message: message ?? "REQUEST_OK",
      meta,
      data,
      auth,
      additional,
      duration,
    });
  }

  public static info(
    message: string | null = null,
    data: any = null,
    auth: any[] | null = null,
    additional: any[] = []
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.INFO,
      message: message ?? "REQUEST_OK",
      data,
      auth,
      additional,
    });
  }

  public static infoToast(
    message: string | null = null,
    data: any = null,
    auth: any[] | null = null,
    additional: any[] = [],
    duration: number | null = null
  ): WApiResource {
    return new WApiResource({
      type: ResponseTypeEnum.INFO,
      isToast: true,
      message: message ?? "REQUEST_OK",
      data,
      auth,
      additional,
      duration,
    });
  }

  public toArray(): any {
    return this.data;
  }

  public toResponse() {
    const response: Record<string, any> = {
      type: this.type,
      is_toast: this.isToast,
      message: this.message,
      errors: this.errors,
      data: this.data,
      meta: this.meta,
      auth: this.auth,
      additional: this.additional,
      duration: this.duration,
    };

    // Remove null properties and empty arrays from the response
    Object.keys(response).forEach((key) => {
      if (
        response[key] === null ||
        (Array.isArray(response[key]) &&
          response[key].length === 0 &&
          key !== "data")
      ) {
        delete response[key];
      }
    });

    return response;
  }
}

export class RedirectResponse {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
};